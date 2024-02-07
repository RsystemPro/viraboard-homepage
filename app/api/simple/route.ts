import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {

  console.log('Triggered');
  console.log(req.body);

    // const { searchParams } = new URL(request.url)
    // const id = searchParams.get('id')
    // console.log(id);
    
    // console.log(request.body);
    
   
    // return res.status(200).json({ product: 'data' })
    // return NextResponse.json({ name: 'John Doe' },{status: 200});
    return Response.json({Msg:"your message"}, {status:200})
  }