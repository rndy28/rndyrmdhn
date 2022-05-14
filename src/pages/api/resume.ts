import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { cwd } from 'process';


const fileBuffer = fs.readFileSync(cwd() + '/src/data/resume.pdf')

const cvHandler = (_: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Content-Type', 'application/pdf')
    res.send(fileBuffer)
};

export default cvHandler