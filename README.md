# 🧾 Invoice Planner App (React + TailwindCSS)

This is a simple and responsive Trip-planner project built using **React.js**, **Tailwind CSS**, and **Framer Motion**. It allows users to create daily task cards (days), add/edit/delete activities, attach notes, and export their plans.

---

## 📌 Features

✅ Create daily task entries with:
- Title (e.g., "Day 1", "Monday Plan")
- Activities (comma-separated list)
- Notes.
✅ Edit existing entries (prompt-based editing)  
✅ Delete individual day entries  
✅ Show/hide task creation form  
✅ Save data using browser **localStorage**  
✅ Separate routes for **Home**, **About**, and **Contact**  
✅ Responsive and clean UI using Tailwind CSS

---

## 🧱 Tech Stack

| Technology    | Use Case                     |
|---------------|------------------------------|
| React.js      | Frontend UI & logic          |
| Tailwind CSS  | Styling                      |
| React Router  | Routing between pages        |
| Framer Motion | Smooth animations and reorder|
| localStorage  | Save daily plans persistently|

---

## 🚀 How It Works

### 🏠 Home Page (`/`)
- Displays header, control buttons, and cards of daily plans.
- Add Day ➜ opens a form to input:
  - `Title` (e.g., Day 1 Plan)
  - `Activities` (comma-separated)
  - `Notes`
- Each card has **Edit** and **Delete** options.
- Reordering works with **Framer Motion** drag-drop.

### 🧾 About Page (`/about`)
- Simple static page with app description or developer info.

### 📞 Contact Page (`/contact`)
- Static contact form/page.
