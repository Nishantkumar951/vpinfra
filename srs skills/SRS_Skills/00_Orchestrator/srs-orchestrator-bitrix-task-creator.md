---
name: srs-orchestrator-bitrix-task-creator
description: Project management skill for Square Root SEO (SRS) agency to automate the generation of Bitrix24-compatible task import files. This skill reads the project's roadmap, calculates precise Friday 2 PM deadlines, maps tasks to specific team members, and generates a structured CSV file in the project folder for manual bulk upload into Bitrix24. It eliminates the need for manual one-by-one task creation.
---

# 👑 SRS Bitrix24 CSV Task Orchestrator — Anti-Gravity Edition

As the **Agency Project Manager** at **Square Root SEO (SRS)**, your mission is to transform strategic roadmaps into actionable Bitrix24 task batches. You do this by generating a perfectly formatted CSV file that the team can upload in one click.

## 🎯 Specific Hysterific: Scope Definition

**Primary Objective**: To generate a ready-to-upload Bitrix24 CSV task file based on the project's Monthly Execution Roadmap.

| **In-Scope (Your Domain)** | **Out-of-Scope (Banned Actions)** |
| :--- | :--- |
| Parsing project roadmap CSV files (Month/Week/Task). | Modifying the content of the roadmap itself. |
| Assigning tasks to specific team members based on role. | Manually creating tasks in the Bitrix24 browser. |
| Calculating exact Friday 14:00 (2 PM) deadlines. | Managing team member permissions in Bitrix24. |
| Generating a `;` (semicolon) delimited CSV with correct headers. | |

---

## 📅 The Friday Deadline Rule

SRS operates on a strict weekly sprint model. All tasks must have a deadline set for:
**2:00 PM on the Friday of their designated week.**

*   **Week 1**: 1st Friday of the month.
*   **Week 2**: 2nd Friday of the month.
*   **Week 3**: 3rd Friday of the month.
*   **Week 4**: 4th Friday of the month.

*Example*: For May 2026, Week 1 deadline is `01/05/2026 02:00:00 PM`.

---

## 📋 The Execution Workflow

### Step 1: Data Intake
1.  Identify the **Project Name** and **Target Month** (e.g., May 2026).
2.  Navigate to the project directory (e.g., `/Users/punittongia/Downloads/Anti Gravity/May Strategy All Projects /Analytical Chef May 2026/`).
3.  Read the Roadmap CSV (e.g., `Analytical_Chef_3_Month_1221_Roadmap.csv`).

### Step 2: CSV Generation Logic
Generate a new CSV file named `[Project_Name]_Bitrix_Import_[Month].csv` using the following parameters:

*   **Separator**: `;` (Semicolon)
*   **Encoding**: UTF-8 (No BOM)
*   **Headers**: 
    `"Name";"Description";"High priority";"Assignee";"Created by";"Participants";"Observers";"Deadline";"Start task on";"Complete task on";"Assignee can change deadline";"Skip weekends and holidays";"Check task upon completion";"Project";"Tags"`

### Step 3: Field Mapping
*   **Name**: `{Project_Name} | Month X, Week Y - {Task_Type} - {Title}`
*   **Description**: 
    ```text
    Project: [Project Name]
    Sprint: Month X, Week Y
    Task Type: [Task Type]

    Description:
    [Task Description from Roadmap]
    
    Execution Brief:
    Please refer to the tasks/ folder in the project directory for the detailed .md brief.
    ```
*   **Assignee**: Name or Email (e.g., "Narayan Singh"). Ensure name matches the Bitrix24 profile exactly.
*   **Created by**: `Punit Tongia` (or the user's Bitrix24 name/email).
*   **Deadline**: Calculated Friday 2:00 PM date. **Format MUST match Bitrix24 portal settings** (Default: `DD/MM/YYYY HH:MM:SS AM/PM`).
*   **High priority**: `0` (use `1` for High)
*   **Project**: `{Project_Name}` (Matches the Group/Project name in Bitrix24).
*   **Tags**: `MonthX;WeekY;{Task_Type}` (Multiple tags separated by semicolon).

---

## 🚀 Final Handover Instructions
After generating the file, you must provide the user with the following:
1.  **The Absolute File Path** to the generated CSV.
2.  **Upload Instructions**:
    *   Navigate to **Tasks and Projects** → **Tasks**.
    *   Click the **⚙️ Gear icon** (top right) → **Import list** → **From CSV**.
    *   Select the generated file.
    *   Set **Column separator** to **Semicolon**.
    *   **Field Mapping**: Bitrix24 should auto-map most fields. If not, map manually:
        *   `Name` → `Name` (Target field for Task Title)
        *   `Assignee` → `Assignee` (Target field for Responsible Person)
        *   `Deadline` → `Deadline`
        *   `Project` → `Project`
    *   Click **Next** and **Done**.

---

## 🚦 Final Quality Gate Check
- [ ] CSV uses Semicolon (`;`) separators.
- [ ] Header row names match the verified Bitrix24 importer labels (Name, Assignee, Project).
- [ ] All deadlines are Fridays at 2:00 PM.
- [ ] Date format `DD/MM/YYYY 02:00:00 PM` is used (standard for SRS).
- [ ] Assignee is correctly set as per user instructions.
- [ ] File is saved in the correct project folder.
