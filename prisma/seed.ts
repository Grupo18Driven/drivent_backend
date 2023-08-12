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
    const rooms = [
      {
        name: '101',
        capacity: 1,
        hotelId: 1,
      },
      {
        name: '102',
        capacity: 2,
        hotelId: 1,
      },
      {
        name: '103',
        capacity: 3,
        hotelId: 1,
      },
    ];

    for (const room of rooms) {
      await prisma.room.create({
        data: room,
      });
    }
  };

  let bookings = await prisma.booking.findFirst();

  if (!bookings) {
    const bookings = [
      {
        userId: 1,
        roomId: 1,
      },
      {
        userId: 2,
        roomId: 3,
      },
      {
        userId: 3,
        roomId: 3,
      },
    ];

    for (const booking of bookings) {
      await prisma.booking.create({
        data: booking,
      });
    }
  };

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