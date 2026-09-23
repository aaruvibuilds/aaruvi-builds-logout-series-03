# ⚡ AARUVI BUILDS

### ⏻ Logout Animation — Series 03

**End the session.**
**Collapse the workspace.**

<p align="center">
  <a href="https://aaruvibuilds.github.io/aaruvi-builds-logout-series-03/">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-7B5CFF?style=for-the-badge&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/aaruvibuilds/aaruvi-builds-logout-series-03">
    <img src="https://img.shields.io/badge/💻%20SOURCE%20CODE-17151B?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
  </a>
</p>

---

## ⏻ The Build

**Logout Animation — Series 03** explores another direction for the logout experience.

Instead of treating logout as a simple button action, the interface visually **collapses the active workspace into a focused session-ending moment**.

The interaction moves through a simple visual sequence:

```text
ACTIVE SESSION
      ↓
ENDING SESSION
      ↓
SESSION ENDED
      ↓
ENTER WORKSPACE
      ↓
ACTIVE SESSION
```

Built entirely with **HTML, CSS and JavaScript**.

No frameworks.
No libraries.
Just frontend interaction and motion.

---

## 🎬 The Experience

### 01 — Active Workspace

The experience begins inside a personal workspace interface.

The dashboard includes:

* Workspace identity
* Active session indicator
* Personal workspace greeting
* User profile
* Active project statistics
* Team status
* Storage usage
* Logout control

The system starts in the:

**ACTIVE SESSION**

state.

---

### 02 — Initiating Logout

Clicking the **Logout** button starts the session-ending sequence.

The interface immediately begins transitioning away from the active workspace.

The logout control changes visually while the workspace starts losing focus.

At the same time, the central session-ending experience appears.

The interface enters:

**ENDING SESSION**

---

### 03 — Workspace Collapse

The dashboard doesn't simply disappear.

Instead, the workspace visually collapses.

The transition combines:

* Profile movement
* Profile pill movement
* Dashboard scaling
* Card exit animations
* Opacity changes
* Blur
* Central visual reveal

The workspace moves away while the central session-ending visual becomes the focus.

---

### 04 — Ending Session

At the center of the interface is the user's avatar surrounded by a circular ring.

The experience displays:

```text
ENDING SESSION
```

The avatar becomes the visual focus while the surrounding ring expands and then collapses.

The workspace fades away behind it.

This creates a visual bridge between:

```text
ACTIVE WORKSPACE
```

and:

```text
SESSION ENDED
```

---

### 05 — Session Ended

After the collapse sequence completes, the interface reaches its final state:

**Session ended**

> Welcome back when you're ready.

The workspace has completely transitioned away.

A dedicated action is presented:

**Enter workspace**

---

### 06 — Enter Workspace

The experience doesn't require a page refresh.

Clicking **Enter workspace** restores the interface.

The signed-out screen fades away while:

* The workspace returns
* The profile returns
* The profile pill returns
* Dashboard cards reappear
* The active state is restored

The interface returns to:

**ACTIVE SESSION**

The interaction can therefore be experienced repeatedly.

---

## ✨ Interaction System

| State / Action  | Behaviour                            |
| --------------- | ------------------------------------ |
| `active`        | Workspace active                     |
| `ending`        | Logout and collapse sequence         |
| `signed-out`    | Session ended                        |
| Logout button   | Starts session-ending transition     |
| Enter workspace | Restores workspace                   |
| Escape key      | Returns to workspace when signed out |

The JavaScript manages the application state and timed transition sequence.

---

## 🎨 Motion Details

The visual system combines several small interactions:

* Logout button feedback
* Logout button state transition
* Profile exit movement
* Profile pill movement
* Dashboard scaling
* Dashboard fade
* Card staggered exit
* Card blur effect
* Central avatar reveal
* Expanding collapse ring
* Avatar collapse animation
* Session-ending label fade
* Signed-out entrance
* Login mark reveal
* Content entrance animation
* Enter workspace transition
* Dashboard restoration
* Card staggered restoration
* Hover feedback
* Focus-visible states

The CSS also includes responsive behaviour and reduced-motion support.

---

## 🧠 State-Driven Interaction

The interaction is controlled through a simple JavaScript state system.

```text
active
   │
   │ Logout
   ▼
ending
   │
   │ 1750ms
   ▼
signed-out
   │
   │ Enter workspace
   ▼
active
```

Instead of controlling every animation individually, JavaScript changes the application state while CSS handles the visual choreography.

This keeps the interaction lightweight and easy to understand.

---

## 🛠️ Built With

### HTML5

Provides the structure for:

* Workspace shell
* Navigation
* Session indicator
* User profile
* Dashboard
* Statistics cards
* Collapse stage
* Signed-out state
* Workspace restoration control

### CSS3

Handles the visual experience through:

* CSS transitions
* CSS transforms
* Keyframe animations
* Responsive layouts
* Hover states
* Focus-visible states
* Custom properties
* Staggered transitions
* Reduced-motion support

### JavaScript

Controls:

* Application state
* Logout interaction
* Session-ending timer
* Signed-out state
* Workspace restoration
* Escape-key interaction
* Button state management

---

## 📊 The Dashboard

The active workspace contains a lightweight personal workspace interface.

```text
┌──────────────────────────────────────────┐
│ A  Workspace Studio       ● ACTIVE       │
│                              [ Logout ]   │
│                                          │
│ YP   Personal workspace                  │
│      Your space,                         │
│      your flow.                          │
│                                          │
│ ┌────────────────┐ ┌──────────┐ ┌─────┐ │
│ │ Overview       │ │ Team     │ │Store│ │
│ │ 08             │ │ 14       │ │72%  │ │
│ │ active projects│ │ members  │ │used │ │
│ └────────────────┘ └──────────┘ └─────┘ │
└──────────────────────────────────────────┘
```

The dashboard provides enough visual structure to make the logout interaction feel like a transition from an active workspace.

---

## 🌀 The Collapse Stage

The defining visual element of Series 03 is the session-ending collapse.

```text
              ┌───────────┐
              │    YP     │
              └───────────┘
                    ○
               ○         ○
                    ↓
              ENDING SESSION
                    ↓
               SESSION ENDED
```

The avatar and ring become the visual focus while the workspace recedes.

The result is a focused transition from an active digital workspace into a completed session.

---

## 📱 Responsive

The interface adapts for smaller screens.

The responsive system includes:

* Reduced dashboard spacing
* Mobile navigation adjustments
* Hidden secondary session information
* Responsive profile composition
* Responsive dashboard cards
* Two-column card layout on smaller screens
* Single-column card layout on very small screens
* Smaller avatar composition
* Mobile-friendly logout control

The project includes dedicated breakpoints for tablet and mobile layouts.

---

## ♿ Reduced Motion

The interaction includes support for:

```css
prefers-reduced-motion: reduce
```

When reduced motion is preferred, animation and transition durations are minimized while keeping the interface usable.

---

## 📂 Project Structure

```text
aaruvi-builds-logout-series-03/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

Simple frontend structure.

No build tools required.

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/aaruvibuilds/aaruvi-builds-logout-series-03.git
```

Enter the project:

```bash
cd aaruvi-builds-logout-series-03
```

Open:

```text
index.html
```

That's it.

No installation required.

No dependencies required.

---

## 🌐 Live Demo

### Try the interaction

[**🚀 Open Live Demo**](https://aaruvibuilds.github.io/aaruvi-builds-logout-series-03/)

Click **Logout** and watch the workspace collapse into the session-ending sequence.

Then click **Enter workspace** to restore the interface.

---

## 💻 Source Code

The complete source code used for this build is available on GitHub.

### Repository

[**💻 View Source Code**](https://github.com/aaruvibuilds/aaruvi-builds-logout-series-03)

---

## 🎯 The Idea

A logout interaction doesn't have to feel like:

```text
CLICK → DISAPPEAR
```

It can communicate a complete visual transition:

```text
ACTION
  ↓
FEEDBACK
  ↓
WORKSPACE COLLAPSE
  ↓
SESSION TRANSITION
  ↓
COMPLETION
```

Series 03 explores the idea of making the workspace itself feel like it is **ending with the session**.

The interaction turns a familiar interface action into a small piece of motion design.

---

## ⚡ AARUVI BUILDS

**Frontend • UI • Motion**

Building modern web experiences through:

`Frontend Development` · `Creative UI` · `Smooth Motion`

### Follow the journey

**Instagram:** [@aaruvi_builds](https://www.instagram.com/aaruvi_builds)

**YouTube:** [@AaruviBuilds](https://www.youtube.com/@AaruviBuilds)

**GitHub:** [@aaruvibuilds](https://github.com/aaruvibuilds)

---

### BUILD. EXPERIMENT. CREATE.

**⚡ Aaruvi Builds**

*Series 03 / Logout Animation*
