export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  createdAt: string;
}

export type Planet = {
  id: number;
  name: string;
  climate: string;
  gravity: number;
  location: {
    x: number;
    y: number;
  };
}

export type Message = {
  timestamp: string;
  author: number;
  message: string;
}

export type Passenger = {
  id: number;
  name: string;
  age: number;
  nationality: string;
  language: string;
  contact: {
    address: string;
    phone: string;
    email: string;
  }
}

export type Booking = {
  passenger: number;
  reference: string;
  ticket: string;
  flight: string;
  status: number;
  departure: {
    datetime: string;
    location: number;
  }
  arrival: {
    datetime: string;
    location: number;
  }
  vessel: number;
  duration: number;
  cabin: {
    cabin: string;
    deck: string;
  }
  baggage: {
    personal: string;
    cargo: string;
  }
}
