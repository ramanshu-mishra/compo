import "./globals.css"
export default function Layout({children}:{children:React.ReactNode}){
  return(
    <html lang="en" className="h-full">
      <body className="min-h-screen h-full bg-neutral-900 flex justify-center items-center">
        {children}
      </body>
    </html>
  )
}