import { NextRequest, NextResponse } from "next/server";
import connectMongoDb from "../../../../helpers/connectMongoDB";
import UserModel, { UserDocument } from "../../../../models/user.model";
import UserService from "../../../../service/user.service";

export const maxDuration = 5;

export async function PATCH(req: Request, res: Response) {
  await connectMongoDb();

  const body: UserDocument = await req.json();
  const { name, email, stared } = body;
  const user = await UserService.findUser({ email });
  if (!user) {
    return NextResponse.json(
      { msg: "smth went wrong user no?  exit" },
      { status: 404 }
    );
  }
  if (stared) {
    user.stared = stared;
  }
  const updatedUser = await user.save();

  return NextResponse.json({ updatedUser }, { status: 204 });
}
