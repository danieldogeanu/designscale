import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBrandDribbble } from '@tabler/icons-react';
import { Group, Stack, TypographyStylesProvider } from '@mantine/core';
import SocialIcon from '../components/SocialIcon';
import classes from '../styles/footer.module.scss';

export default function Footer() {
  const urls = {
    danieldogeanu: 'https://danieldogeanu.com',
    project: 'https://github.com/danieldogeanu/scale-cheat-sheet',
    github: 'https://github.com/danieldogeanu',
    linkedin: 'https://www.linkedin.com/in/danieldogeanu/',
    instagram: 'https://www.instagram.com/danieldogeanu/',
    dribbble: 'https://dribbble.com/danieldogeanu',
  };

  return (
    <TypographyStylesProvider style={{paddingLeft: 0}}>
      <footer className={classes.footer}>
        <div className={classes.donate}>
          <p>If this was useful to you, you can buy me a coffee.</p>
        </div>
        <div className={classes.socials}>
          <Group gap={4} justify='center'>
            <SocialIcon label='LinkedIn' icon={IconBrandLinkedin} href={urls.linkedin} />
            <SocialIcon label='GitHub' icon={IconBrandGithub} href={urls.github} />
            <SocialIcon label='Dribbble' icon={IconBrandDribbble} href={urls.dribbble} />
            <SocialIcon label='Instagram' icon={IconBrandInstagram} href={urls.instagram} />
          </Group>
        </div>
        <div className={classes.copyright}>
          <Stack gap={0}>
            <p>Made by <a href={urls.danieldogeanu} target='_blank' rel='noreferrer'>Daniel Dogeanu</a>.</p>
            <p>View project on <a href={urls.project} target='_blank' rel='noreferrer'>GitHub</a>.</p>
          </Stack>
        </div>
      </footer>
    </TypographyStylesProvider>
  );
}
