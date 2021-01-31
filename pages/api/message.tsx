import type { NextApiRequest, NextApiResponse } from "next";

interface Message {
  id: string;
  createdAt?: string;
  phoneNumber: number;
  message: string;
  status?: string;
}

interface MessageStatus {
  id: string;
  status: string;
}

// temporary db
let messages: Message[] = [];

const addMessage = (data: Message): Message[] => {
  console.log(data);
  const preData = {
    id: messages.length + 1,
    createdAt: new Date().toISOString(),
    status: "waiting",
  };
  const objData = typeof data == "string" ? JSON.parse(data) : data;
  const finalData = { ...preData, ...objData };
  messages = [...messages, finalData];
  return [finalData];
};

const updateStatus = (data: MessageStatus) => {
  const find = messages.map((msg) => {
    if (msg.id == data.id) {
      msg.status = data.status;
    }
    return msg;
  });
  messages = find;
  return [
    {
      id: data.id,
      status: data.status,
    },
  ];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let response: Message[] | MessageStatus[] = [];
  switch (req.method) {
    case "GET":
      response = messages;
      break;

    case "POST":
      response = addMessage(req.body);
      break;

    case "PUT":
      response = updateStatus(req.body);
      break;
  }

  setTimeout(() => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(response));
  }, 2000);
  // res.statusCode = 400;
  // res.end("Bad Request");
}
