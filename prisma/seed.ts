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

  let users = await prisma.user.findFirst();

  if (!users) {
    for (let i = 1; i <= 40; i++) {
      await prisma.user.create({
        data: {
          email: `user${i}@example.com`,
          password: `password${i}`,
        },
      });
    }
  }

  let ticketTypes = await prisma.ticketType.findFirst();

  if (!ticketTypes) {
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
  }

  let hotels = await prisma.hotel.findFirst();

  if (!hotels) {
    const hotels = [
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

    for (const hotel of hotels) {
      await prisma.hotel.create({
        data: hotel,
      });
    }
  }

  let rooms = await prisma.room.findFirst();

  if (!rooms) {
    
    for (let i = 101; i <= 120; i++) {
      const capacity = Math.floor(Math.random() * 3) + 1;
  
      await prisma.room.create({
        data: {
          name: `${i}`,
          capacity: capacity,
          hotelId: 1,
        },
      });
    };

    for (let i = 101; i <= 120; i++) {
      const capacity = Math.floor(Math.random() * 3) + 1;
  
      await prisma.room.create({
        data: {
          name: `${i}`,
          capacity: capacity,
          hotelId: 2,
        },
      });
    };

    for (let i = 101; i <= 120; i++) {
      const capacity = Math.floor(Math.random() * 3) + 1;
  
      await prisma.room.create({
        data: {
          name: `${i}`,
          capacity: capacity,
          hotelId: 3,
        },
      });
    };
  }

  let bookings = await prisma.booking.findFirst();

  if (!bookings) {
    let roomId = 1;
    let userId = 1;

    while (roomId <= 60) {
      if (userId > 40) {
        break;
      }

      const room = await prisma.room.findFirst({
        where: {
          id: roomId,
        }
      });
      const randomChanceOfBooking = generateRandomBoolean(0.3);

      if (randomChanceOfBooking && room) {
        for(let i=0; i<room.capacity; i++) {
          const randomChanceOfAnotherBooking = generateRandomBoolean(0.5);
          if (randomChanceOfAnotherBooking || i===0) {
            await prisma.booking.create({
              data: {
                userId: userId,
                roomId: roomId,
              }
            })
            userId++
            if (userId > 40) {
              break;
            }
          }
        }
      }
      roomId++
    }
  };

  console.log({ event });
}

function generateRandomBoolean(chanceOfTrue : number) : boolean {
  const randomValue = Math.random();
  return randomValue < chanceOfTrue;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
});
