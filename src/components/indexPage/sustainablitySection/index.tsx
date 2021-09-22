import React, { FC, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '@material-ui/core/Container'
import { StaticImage } from 'gatsby-plugin-image'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import Modal from './modal'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      display: `block`,
      margin: `2rem auto`,
    },
    container: {
      maxWidth: `800px`,
      paddingBottom: theme.spacing(5),

      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(8),
      },
    },
  })
)

const SustainabilitySection: FC = () => {
  const {
    file: { childrenMarkdownRemark },
  } = useStaticQuery(
    graphql`
      query IndexPageSustainabiltySectiondQuery {
        file(
          absolutePath: { regex: "/content/indexPage/sustainablitySection/" }
        ) {
          childrenMarkdownRemark {
            frontmatter {
              title
            }
            internal {
              content
            }
          }
        }
      }
    `
  )

  const { content } = childrenMarkdownRemark[0].internal
  const { title } = childrenMarkdownRemark[0].frontmatter

  const [activeModal, setActiveModal] = useState(false)

  const classes = useStyles()

  return (
    <Container className={classes.container} component='section'>
      <StaticImage
        src='../../../images/sustainability.jpeg'
        alt='Flowers layed on white background, i a heart shape.'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
      <Typography align='center' color='primary' paragraph variant='h2'>
        {title}
      </Typography>
      <Typography align='center'>{content}</Typography>
      <Button
        color='primary'
        variant='contained'
        size='large'
        className={classes.btn}
        onClick={() => {
          console.log('click')
          return setActiveModal(true)
        }}
      >
        Kvalitets- &amp; Miljöpolicy
      </Button>
      <Modal active={activeModal} setActive={setActiveModal}>
        <Box>
          <Typography color='primary' variant='h3'>
            Kvalitets- och Miljöpolicy
          </Typography>
          <p>
            Thors Bygg ska i all verksamhet främja ett långsiktigt kvalitets-
            och miljöarbete. Det är vårt ansvar att som företag se till att våra
            projekt genomförs i god samverkan, med största möjliga hänsyn till
            miljön och för en hållbar framtid.
          </p>
          <h4>
            <strong>Vi gör detta genom att:</strong>
          </h4>
          <ul>
            <li>
              arbeta på ett strukturerat och systematiskt sätt som leder till
              ständiga miljöoch kvalitetsförbättringar
            </li>
            <li>
              arbeta med kvalitet, miljö och etik så att varje kund och projekt
              blir en god referens
            </li>
            <li>
              förebygga uppkomst och spridning av föroreningar samt öka
              medarbetarnas kunskap inom kvalitets- och miljöområdet
            </li>
            <li>driva vårt miljöarbete utöver gällande lagstiftning.</li>
          </ul>
          <h4>
            <strong>Övergripande kvalitets- och miljömål:</strong>
          </h4>
          <ul>
            <li>
              vi ska arbeta för att bibehålla ett högt Nöjd-Kund-Index (NKI)
            </li>
            <li>
              våra projekt ska utformas, genomföras och förvaltas på ett sådant
              sätt att transporter och dess miljöpåverkan minskar
            </li>
            <li>vi ska minska avfallets mängd och risk</li>
            <li>
              vi ska använda resurser och metoder som ger minskad
              miljöbelastning.
            </li>
          </ul>
        </Box>
      </Modal>
    </Container>
  )
}

export default SustainabilitySection
