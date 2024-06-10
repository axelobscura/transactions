import { NextResponse } from 'next/server'

const transactions = [
  { 
    id: 1, 
    date: new Date(),
    amount: 234.10,
    type: "DEBIT",
    category: "Food",
    description: "Lunch at El Taco Salvaje" 
  },
  { 
    id: 2, 
    date: new Date(),
    amount: 80.10,
    type: "CREDIT",
    category: "Soda",
    description: "Drink at El Taco Salvaje" 
  },
  { 
    id: 3, 
    date: new Date(),
    amount: 90.10,
    type: "CREDIT",
    category: "Desert",
    description: "Cake at El Taco Salvaje" 
  },
];
 
export async function GET(request: Request) {
  return NextResponse.json({ msg: transactions })
}