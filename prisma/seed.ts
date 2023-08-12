import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main() {
  let event = await prisma.event.findFirst();
  if (!event) {
    event = await prisma.event.create({
      data: {
        title: "Driven.t",
        logoImageUrl: "https://files.driveneducation.com.br/images/logo-rounded.png",
        backgroundImageUrl: "linear-gradient(to right, #FA4098, #FFD77F)",
        startsAt: dayjs().toDate(),
        endsAt: dayjs().add(21, "days").toDate(),
      },
    });
  }

  const ticketTypes = [
    {
      name: "Online",
      price: 10000, 
      isRemote: true,
      includesHotel: false,
    },
    {
      name: "Presencial sem Hotel",
      price: 25000, 
      isRemote: false,
      includesHotel: false,
    },
    {
      name: "Presencial com Hotel",
      price: 60000, 
      isRemote: false,
      includesHotel: true,
    },
  ];

  for (const ticketType of ticketTypes) {
    await prisma.ticketType.create({
      data: ticketType,
    });
  }

  console.log({ event });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function seed() {
  async function clearHotels() {
    await prisma.booking.deleteMany({});
    await prisma.room.deleteMany({});
    await prisma.hotel.deleteMany({});
  }
  clearHotels();
  try {
    const hotelData = [
      {
        name: 'LuxInn',
        image: 'https://i.pinimg.com/564x/12/d6/5e/12d65ed40d985f4e89c572a2ad621fec.jpg'
      },
      {
        name: 'UrbanStay',
        image: 'https://i.pinimg.com/564x/22/5e/be/225ebe6849b5714561c783f995167008.jpg'
      },
      {
        name: 'CozyHaven',
        image: 'https://i.pinimg.com/564x/77/17/8f/77178f7abd3ea8d1913e6c6eed16bf4d.jpg'
      }
    ];

    for (const data of hotelData) {
      let maxCapacity = 0;
      if (data.name === 'CozyHaven') {
        maxCapacity = 1;
      } else if (data.name === 'UrbanStay') {
        maxCapacity = 2;
      } else if (data.name === 'LuxInn') {
        maxCapacity = 3;
      }

      const hotel = await prisma.hotel.create({
        data: {
          name: data.name,
          image: data.image,
          Rooms: {
            create: Array(40).fill(null).map(() => {
              const number = getRandomInt(1, maxCapacity);
              let roomName = '';
              if (number === 1) {
                roomName = 'Single';
              } else if (number === 2) {
                roomName = 'Double';
              } else if (number === 3) {
                roomName = 'Triple';
              }
              return {
                name: roomName,
                capacity: number
              };
            })
          }
        }
      });

      console.log(`Hotel "${hotel.name}" criado com sucesso.`);
    }
  } catch (error) {
    console.error('Erro ao adicionar hotéis e quartos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();

