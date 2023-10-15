import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../helpers/connectMongoDB";
import { UserDocument } from "../../../../../models/user.model";
import UserService from "../../../../../service/user.service";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "500kb",
    },
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 5,
};

export async function POST(req: Request, res: Response) {
  await connectMongoDb();
  const body: UserDocument = await req.json();
  try {
    const exitstedUser = await UserService.findUser({ email: body.email });
    if (exitstedUser) {
      return NextResponse.json({ exitstedUser }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { msg: "smth went wrong user allredy exit" },
      { status: 404 }
    );
  }

  let newUser;

  try {
    newUser = await UserService.addUser(body);
    return NextResponse.json({ newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { msg: "smth went wrong cant create new user" },
      { status: 404 }
    );
  }
}
