import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

/**
 * API endpoint to get list of images in a specific folder
 * @param request - Next.js request object with folder query parameter
 * @returns JSON response with list of image filenames
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const folder = searchParams.get("folder")

    if (!folder) {
      return NextResponse.json({ error: "Folder parameter is required" }, { status: 400 })
    }

    // Path to the contents folder
    const folderPath = path.join(process.cwd(), "public", "contents", folder)

    // Check if folder exists
    if (!fs.existsSync(folderPath)) {
      return NextResponse.json({ images: [] })
    }

    // Read all files in the folder
    const files = fs.readdirSync(folderPath)

    // Filter for image files only
    const imageExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif"]
    const images = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase()
        return imageExtensions.includes(ext)
      })
      .map((file) => `/contents/${folder}/${file}`)

    return NextResponse.json({ images })
  } catch (error) {
    console.error("Error reading images:", error)
    return NextResponse.json({ error: "Failed to read images" }, { status: 500 })
  }
}
