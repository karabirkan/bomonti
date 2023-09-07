// import React from "react";
// import { useState } from "react";
// import {
//   createStyles,
//   Header,
//   Group,
//   ActionIcon,
//   Container,
//   Burger,
//   rem,
//   Image,
//   UnstyledButton,
// } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import {
//   IconBrandTwitter,
//   IconBrandYoutube,
//   IconBrandInstagram,
// } from "@tabler/icons-react";
// import { NavLink } from "react-router-dom";

// import Logo from "../header/logo.png";

// const useStyles = createStyles((theme) => ({
//   inner: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     height: rem(56),

//     [theme.fn.smallerThan("sm")]: {
//       justifyContent: "flex-start",
//     },
//   },

//   links: {
//     width: rem(260),

//     [theme.fn.smallerThan("sm")]: {
//       display: "none",
//     },
//   },

//   social: {
//     width: rem(260),

//     [theme.fn.smallerThan("sm")]: {
//       width: "auto",
//       marginLeft: "auto",
//     },
//   },

//   burger: {
//     marginRight: theme.spacing.md,

//     [theme.fn.largerThan("sm")]: {
//       display: "none",
//     },
//   },

//   link: {
//     display: "block",
//     lineHeight: 1,
//     padding: `${rem(8)} ${rem(12)}`,
//     borderRadius: theme.radius.sm,
//     textDecoration: "none",
//     color:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[0]
//         : theme.colors.gray[7],
//     fontSize: theme.fontSizes.sm,
//     fontWeight: 500,

//     "&:hover": {
//       backgroundColor:
//         theme.colorScheme === "dark"
//           ? theme.colors.dark[6]
//           : theme.colors.gray[0],
//     },
//   },

//   linkActive: {
//     "&, &:hover": {
//       backgroundColor: theme.fn.variant({
//         variant: "light",
//         color: theme.primaryColor,
//       }).background,
//       color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
//         .color,
//     },
//   },
// }));

// const links = [
//   {
//     link: "/",
//     label: "Home",
//   },
//   {
//     link: "/checkout",
//     label: "Checkout",
//   },
// ];

// function header() {
//   const [opened, { toggle }] = useDisclosure(false);
//   const [active, setActive] = useState(links.link);
//   const { classes, cx } = useStyles();

//   const items = (
//     <NavLink
//       key={links[1].label}
//       to={links[1].link}
//       className={cx(classes.link, {
//         [classes.linkActive]: active === links[1].link,
//       })}
//       onClick={() => {
//         setActive(links[1].link);
//       }}
//     >
//       {links[1].label}
//     </NavLink>
//   );

//   // links.map((link) => (
//   //   <NavLink
//   //     key={link.label}
//   //     to={link.link}
//   //     className={cx(classes.link, {
//   //       [classes.linkActive]: active === link.link,
//   //     })}
//   //     onClick={() => {
//   //       setActive(link.link);
//   //     }}
//   //   >
//   //     {link.label}
//   //   </NavLink>
//   // ));

//   return (
//     <Header height={56} mb={40}>
//       <Container className={classes.inner}>
//         <Burger
//           opened={opened}
//           onClick={toggle}
//           size="sm"
//           className={classes.burger}
//         />

// <NavLink to={links[0].link}>
//   <Image width={128} height={48} src={Logo} />
// </NavLink>
{
  /* <Group spacing={0} className={classes.social} position="right" noWrap>
  <ActionIcon size="lg">
    <IconBrandTwitter size="1.1rem" stroke={1.5} />
  </ActionIcon>
  <ActionIcon size="lg">
    <IconBrandYoutube size="1.1rem" stroke={1.5} />
  </ActionIcon>
  <ActionIcon size="lg">
    <IconBrandInstagram size="1.1rem" stroke={1.5} />
  </ActionIcon> */
}
//   <Group className={classes.links} spacing={5}>
//     {items}
//   </Group>
// </Group>
//       </Container>
//     </Header>
//   );
// }

// export default header;
import { useState } from "react";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Box,
  rem,
  ActionIcon,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import Logo from "../header/logo.png";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const links = [
  {
    link: "/",
    label: "Shop",
  },

  {
    link: "/cart",
    label: "Cart",
  },
];

export default function header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={50} className={classes.root}>
      <Container className={classes.header}>
        <NavLink to={links[0].link}>
          <Image width={128} height={48} src={Logo} />
        </NavLink>

        <Group spacing={6} className={classes.links}>
          {items}
        </Group>
        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.3rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.3rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.3rem" stroke={1.5} />
          </ActionIcon>
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
