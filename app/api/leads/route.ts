import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const stmt = db.prepare(`
      INSERT INTO leads (
        projectScope, propertyType, ownProperty, bathroomsCount,
        budget, timeline, zipCode, city, state,
        firstName, lastName, email, phone
      ) VALUES (
        @projectScope, @propertyType, @ownProperty, @bathroomsCount,
        @budget, @timeline, @zipCode, @city, @state,
        @firstName, @lastName, @email, @phone
      )
    `);

    const result = stmt.run({
      projectScope: data.projectScope || '',
      propertyType: data.propertyType || '',
      ownProperty: data.ownProperty || '',
      bathroomsCount: data.bathroomsCount || '',
      budget: data.budget || '',
      timeline: data.timeline || '',
      zipCode: data.zipCode || '',
      city: data.city || '',
      state: data.state || '',
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phone: data.phone || ''
    });

    return NextResponse.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
