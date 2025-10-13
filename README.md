# Personal Website

 [Live Preview](https://yuriivasylchuk.com/)

## Made it possible by

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Three Drei](https://drei.docs.pmnd.rs/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [t3-oss/t3-env](https://env.t3.gg/)
- ESLint 9 + Airbnb Config

## Architecture

The project combines a modified [Atomic Design](https://atomicdesign.bradfrost.com/) + Feature-Based approach.

```
.
├── src/
    ├── app/ (next.js router)
        ├── styles

    ├── features/ (components that contain business logic)

    ├── providers/ 

    ├── lib/ 

    └── components/ (shared UI)
        ├── atoms/

        ├── molecules/

        └── templates/
```

## Commit messages format

The project uses the [Conventional Commit format](https://conventionalcommits.org/) and [Commitlint](https://commitlint.js.org/) to validate commit messages.
