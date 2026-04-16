import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { error } = await supabase.from('leads').insert([{
      project_scope: Array.isArray(data.projectScope)
        ? data.projectScope
        : data.projectScope
          ? [data.projectScope]
          : [],
      other_project_scope: data.projectScopeOther || null,
      property_type: data.propertyType,
      own_property: data.ownProperty,
      bathrooms_count: data.bathroomsCount,
      budget: data.budget,
      timeline: data.timeline,
      zip_code: data.zipCode,
      city: data.city,
      state: data.state,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone
    }]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}