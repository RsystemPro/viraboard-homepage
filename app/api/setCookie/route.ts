import { cookies } from "next/headers";

// export const dynamic = 'force-dynamic'

export async function POST(req: Request, res: Response) {

  const {lang} = await req.json();
  
  cookies().set('lang', lang , { maxAge: 0 })
  // cookies().set({
  //   name: "setCookieAction",
  //   value: "true",
  //   httpOnly: true,
  // })

  const response = Response.json(
    { Msg: "language changed to: "+lang },
    { status: 200 }
  );

  // response.cookies.set("access-token", "we did it");

  return response;

  // return Response.json({ Msg: "language changed to: "+lang }, { status: 200 })

}