import React from 'react'
import classes from './About.module.scss'
import { ReactComponent as MailIcon } from './mail_icon.svg'
import { ReactComponent as LinkedinIcon } from './linkedin_icon.svg'

const ContactComponent = ({ data }) => {
  return (
    <div className={classes.contactWrapper}>
      <span className={classes.name}>{data.name}</span>
      <a href={'mailto:' + data.email}><MailIcon className={classes.icon} /></a>
      <a href={data.linkedin} rel='noopener noreferrer' target='_blank'><LinkedinIcon className={classes.icon} /></a>
    </div>
  )
}

export default ContactComponent