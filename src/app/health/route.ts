import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    return new NextResponse(
      JSON.stringify({
        status: 'healthy',
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new NextResponse(
      JSON.stringify({ status: 'error', message: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
