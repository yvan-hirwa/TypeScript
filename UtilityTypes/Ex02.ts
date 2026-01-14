// 🛡️ The Challenge: The Immutable Security Config
// Scenario: You are the lead architect defining the security rules for a CMS (Content Management System).

// The rules for each role must be explicitly defined (No missing roles allowed).

// The default rules must be immutable (No one can accidentally change the defaults at runtime).

// But... you need a function that allows temporary overrides (updating some settings).

// Instructions:

// Definitions:

// Type UserRole: Union of "admin", "editor", "viewer".

// Interface RoleSettings:

// canDelete: boolean

// canEdit: boolean

// theme: "dark" | "light"

// The Master Configuration (The Hard Part):

// Create a variable DEFAULT_CONFIG.

// Type it using: Readonly<Record<... , ...>>.

// Key is UserRole.

// Value is RoleSettings.

// Assign values:

// Admin: true, true, dark

// Editor: false, true, light

// Viewer: false, false, light

// The Test (Prove it works):

// Try to modify DEFAULT_CONFIG.admin.theme = 'light'. (Comment it out and add a comment saying "// Error").

// The Updater:

// Write a function applyOverride(role: UserRole, update: Partial<RoleSettings>).

// Inside, just console.log the role and the update.

type UserRole = "admin"| "editor" | "viewer"

interface RoleSettings {
    canDelete: boolean
    canEdit:boolean
    theme: "dark" | "light"
}

const DEFAULT_CONFIG: Readonly<Record<UserRole, RoleSettings>> ={
    admin: {
        canDelete: true,
        canEdit: true,
        theme: 'dark'
    },

    editor: {
        canDelete: true,
        canEdit: true,
        theme: 'dark'
    },

    viewer: {
        canDelete: true,
        canEdit: true,
        theme: 'dark'
    }
}

DEFAULT_CONFIG.admin.theme = 'light'

function applyOverride(role: UserRole, update: Partial<RoleSettings>){
    console.log(role, update)
}
applyOverride('admin', {canDelete: false})

console.log(DEFAULT_CONFIG.admin)

/// Readonly Utility is shallow.