# MeetNow


<div align="center">

![Logo](https://github.com/MennaAnwar/MeetNow/assets/79084467/21137323-1760-43b1-abee-52b37538d541)

  <h2 align="center">Meet Now</h2>



  <h3 align="center">A Zoom Clone</h3>
  <h4 align="center"> A workspace for your team, powered by Stream Chat and Clerk.</h4>


</div>

## 📋 <a name="table">Table of Contents</a>

1.  [Introduction](#introduction)
2.  [Technologies](#Technologies)
3.  [Main Features](#main-features)
4.  [Quick Start](#quick-start)


## <a name="introduction">Introduction</a>

This project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.


Demo Link: [Meet Now]([https://meet-7i4gcvzos-mennaanwars-projects.vercel.app/](https://meet-now-ruby.vercel.app/sign-in?redirect_url=https%3A%2F%2Fmeet-now-ruby.vercel.app%2F)



## <a name="Technologies">Technologies</a>

  <div align="center">
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

- Next.js 14
- TypeScript
- Clerk
- getstream
- shadcn
- Tailwind CSS

## <a name="main-features">Main Features</a>


* **Authentication**: Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods.

* **New Meeting**:
  * Quickly start a new meeting, configuring camera and microphone settings before joining.
  * Participants have full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, grid layout, participant list view, and individual participant management (pinning, muting, unmuting, blocking, allowing video share).
  * Participants can leave a meeting, or creators can end it for all attendees.

* **Schedule Meetings**: Input meeting details (date, time) to schedule meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.

* **Previous Meetings List**: Access a list of previously held meetings.

* **View Recorded Meetings**: Access recordings of previous meetings for review or reference.

* **Personal Room**: Users have a personal room with a unique meeting link for instant meetings, shareable with others.

* **Join Meetings via Link**: Easily join meetings created by others by providing a link.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/MennaAnwar/MeetNow.git
cd MeetNow
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
NEXT_PUBLIC_BASE_URL=localhost:3000
```

Replace the placeholder values with your actual Clerk & getstream credentials. You can obtain these credentials by signing up on the [Clerk website](https://clerk.com/) and [getstream website](https://getstream.io/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

