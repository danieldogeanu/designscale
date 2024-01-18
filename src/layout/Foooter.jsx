import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBrandDribbble } from '@tabler/icons-react';
import { Group, Stack, TypographyStylesProvider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import SocialIcon from '../components/SocialIcon';
import classes from '../styles/footer.module.scss';

export default function Footer() {
  const matchesMediaQuery = useMediaQuery('(min-width: 480px)');
  const urls = {
    danieldogeanu: 'https://danieldogeanu.com',
    project: 'https://github.com/danieldogeanu/designscale',
    github: 'https://github.com/danieldogeanu',
    linkedin: 'https://www.linkedin.com/in/danieldogeanu/',
    instagram: 'https://www.instagram.com/danieldogeanu/',
    dribbble: 'https://dribbble.com/danieldogeanu',
  };

  return (
    <TypographyStylesProvider style={{paddingLeft: 0}}>
      <footer className={classes.footer}>
        <div className={classes.footerContainer}>
          <div className={classes.socials}>
            <Group gap={4} justify={matchesMediaQuery ? 'flex-end' : 'center'}>
              <SocialIcon label='LinkedIn' icon={IconBrandLinkedin} href={urls.linkedin} />
              <SocialIcon label='GitHub' icon={IconBrandGithub} href={urls.github} />
              <SocialIcon label='Dribbble' icon={IconBrandDribbble} href={urls.dribbble} />
              <SocialIcon label='Instagram' icon={IconBrandInstagram} href={urls.instagram} />
            </Group>
          </div>
          <div className={classes.copyright}>
            <Stack gap={0}>
              <p>Made by <a href={urls.danieldogeanu} target='_blank' rel='noreferrer' data-umami-event='Website: Daniel Dogeanu'>Daniel Dogeanu</a>.</p>
              <p>View project on <a href={urls.project} target='_blank' rel='noreferrer' data-umami-event='Website: GitHub'>GitHub</a>.</p>
            </Stack>
          </div>
        </div>
      </footer>
    </TypographyStylesProvider>
  );
}
