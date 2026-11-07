import nodemailer from 'nodemailer';

import {EMAIL_PASSWORD} from './env.js'

export const accountEmail = 'k87895920@gmail.com'


const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: accountEmail,
        pass: EMAIL_PASSWORD
    }
})

export default transport;