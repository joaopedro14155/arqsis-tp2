import React from 'react'
import classes from './About.module.scss'
import ContactComponent from './ContactComponent.js'

const contacts = [
  {
    name: 'Tiago Mota',
    email: 'a11585@alunos.ipca.pt',
    linkedin: 'https://www.linkedin.com/in/tiagomota9/'
  },
  {
    name: 'João Pedro',
    email: 'a14155@alunos.ipca.pt',
    linkedin: 'https://www.linkedin.com/in/talvezjoaopedro/'
  }
]

const About = (props) => {
  return (
    <div className={classes.alignedCenter}>
      <h4>Desenvolvido por:</h4>
      {
        contacts.map((item) => (<ContactComponent data={item} />))
      }
    </div>
  )
}

export default About