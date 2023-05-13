export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (
    req.method === "POST" // only allow POST requests
  ) {
    // caputure the credentials required for verification from the request body
    const { name } = req.body;

    //   otp verification logic

    //   set cookie
    setCookie("authorize", true, {
      req,
      res,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    //   respond with status and message
    return res.status(200).json({
      message: `${name} is authorized to access`,
      authorize: true,
      code: "20-0101-2092",
    });
  }
}
