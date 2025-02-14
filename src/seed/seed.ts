import bcryptjs from 'bcryptjs';


interface SeedRecord {
  provider: string;
  accountNumber: string;
  amount: number;
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user'
}



interface SeedData {
  users: SeedUser[];
  records: SeedRecord[];
}




export const initialData: SeedData = {

  users: [
    {
      email: 'javiervargas@google.com',
      name: 'Javier Vargas',
      password: bcryptjs.hashSync('123456'),
      role: 'admin'
    }
  ],



  records: [
    { accountNumber: "AV471E", amount: 789.55, provider: "BBVA" },
    { accountNumber: "PS842R", amount: 512.75, provider: "Banorte" },
    { accountNumber: "QW349J", amount: 1056.23, provider: "Santander" },
    { accountNumber: "XY280T", amount: 234.99, provider: "HSBC" },
    { accountNumber: "FP932M", amount: 1487.60, provider: "Citibanamex" },
    { accountNumber: "LC621H", amount: 932.50, provider: "Banamex" },
    { accountNumber: "GR573A", amount: 1053.80, provider: "Scotiabank" },
    { accountNumber: "IJ391L", amount: 654.30, provider: "Inbursa" },
    { accountNumber: "TU531V", amount: 200.00, provider: "Bajío" },
    { accountNumber: "ZP812K", amount: 1140.45, provider: "Banco Azteca" }
  ]

};