# ⚡ AARUVI BUILDS

### ⏻ Logout Animation — Series 03

**End the session.**
**Collapse the workspace.**

---

## ⏻ The Build

**Logout Animation — Series 03** explores another direction for the logout experience.

Instead of treating logout as a simple button action, the interface visually **collapses the active workspace into a focused session-ending moment**.

The interaction moves through three visual states:

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

The interface starts in the:

**ACTIVE SESSION**

state.

---

### 02 — Initiating Logout

Clicking the **Logout** button begins the session-ending sequence.

The interface immediately starts transitioning away from the active workspace.

The logout control changes visually while the workspace begins to lose focus.

At the same time, the interface introduces the central:

**ENDING SESSION**

stage.

---

### 03 — Workspace Collapse

The dashboard does not simply disappear.

Instead:

* The profile moves upward
* The profile pill pulls away
* Dashboard cards shift and fade
* The workspace scales down
* The active interface loses focus
* The central session-ending visual becomes the focus

At the center is the user's avatar surrounded by a collapsing ring.

The result creates the feeling of the entire workspace being pulled into a single point before the session ends.

---

### 04 — Ending Session

The central transition displays:

```text
ENDING SESSION
```

The avatar briefly becomes the visual focus while the surrounding ring expands and then contracts.

The workspace disappears behind it.

This creates a clear visual bridge between:

```text
ACTIVE WORKSPACE
```

and

```text
SESSION ENDED
```

---

### 05 — Session Ended

After the collapse sequence completes, the interface reaches its final state:

**Session ended**

> Welcome back when you're ready.

The dashboard has completely transitioned away.

A dedicated entry control is presented:

**Enter workspace**

---

### 06 — Enter Workspace

The experience doesn't require a page refresh.

Clicking **Enter workspace** reverses the transition.

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

| State           | Behaviour                            |
| --------------- | ------------------------------------ |
| `active`        | Workspace active                     |
| `ending`        | Logout / collapse sequence           |
| `signed-out`    | Session ended                        |
| Logout button   | Starts session-ending transition     |
| Enter workspace | Restores workspace                   |
| Escape key      | Returns to workspace when signed out |

## The JavaScript manages the application state and timed transition sequence.

---

## 🎨 Motion Details

The visual system combines several small interactions:

* Logout button feedback
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
* Card staggered restoration
* Hover feedback
* Active/focus-visible states

## The CSS also includes responsive behaviour and reduced-motion support.

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

Instead of controlling every visual element independently, JavaScript changes the application state while CSS handles the animation and visual choreography.

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

The dashboard provides enough visual structure to make the logout interaction feel like a transition from a real workspace.

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
                  SESSION
                  ENDED
```

The avatar and ring become the visual focus while the workspace recedes.

This creates a more cinematic logout transition without requiring additional assets or external libraries.

---

## 📱 Responsive

The interface adapts for smaller screens.

The responsive system includes:

* Reduced dashboard spacing
* Mobile navigation adjustments
* Hidden secondary session information
* Responsive profile composition
* Responsive dashboard cards
* Two-column mobile card layout
* Single-column layout on smaller screens
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

[**https://aaruvibuilds.github.io/aaruvi-builds-logout-series-03/**](https://aaruvibuilds.github.io/aaruvi-builds-logout-series-03/)

Click **Logout** and watch the workspace collapse into the session-ending sequence.

Then click **Enter workspace** to restore the interface.

---

## 💻 Source Code

The complete source code used for this build is available on GitHub.

**Repository:**

https://github.com/aaruvibuilds/aaruvi-builds-logout-series-03

---

## 🎯 The Idea

A logout interaction doesn't have to feel like:

```text
CLICK → DISAPPEAR
```

It can become a complete visual transition:

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

**Instagram:** @aaruvi_builds
**YouTube:** @AaruviBuilds
**GitHub:** @aaruvibuilds

---

### BUILD. EXPERIMENT. CREATE.

**⚡ Aaruvi Builds**

*Series 03 / Logout Animation*
