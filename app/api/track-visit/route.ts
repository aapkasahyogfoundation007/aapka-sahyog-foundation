import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { doc, setDoc, updateDoc, increment, getDoc, serverTimestamp } from 'firebase/firestore'

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'
    
    const today = new Date().toISOString().split('T')[0]
    const viewCountRef = doc(db, 'viewCounts', today)
    
    // Get current document
    const docSnap = await getDoc(viewCountRef)
    
    if (docSnap.exists()) {
      // Update existing document
      await updateDoc(viewCountRef, {
        count: increment(1),
        uniqueVisitors: increment(1), // Note: This is simplified. In production, you'd track unique visitors separately
        updatedAt: serverTimestamp()
      })
    } else {
      // Create new document
      await setDoc(viewCountRef, {
        date: today,
        count: 1,
        uniqueVisitors: 1,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      })
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Visit tracked successfully' 
    })
  } catch (error) {
    console.error('Error tracking visit:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to track visit' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ success: true, message: 'Track visit endpoint' })
}