import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  application(): string {
    const site: string = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Status da API</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #102236;
        color: white;
        font-family: Arial, sans-serif;
      }
      .container {
        text-align: center;
        padding: 100px;
      }
      h1 {
        font-size: 36px;
        margin-bottom: 20px;
      }
      p {
        font-size: 18px;
      }
      a {
        color: white;
        text-decoration: underline;
      }
    </style>
    </head>
    <body>
    <div class="container">
      <h1>API Status:</h1>
      <p>A API está ONLINE.</p>
      <p>A documentação está disponível no link: <a href="http://localhost:${process.env.PORT}/docs">Documentação da API</a></p>
    </div>
    </body>
    </html>
    `;

    return site;
  }
}
