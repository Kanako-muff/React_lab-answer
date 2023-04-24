import React from "react"

export const Person = ({person}) => {
    return (
        <h1>
            {/* Hello */}
            Hello {person.firstName.toUpperCase()} {person.lastName.toUpperCase()}
        </h1>
    )
}
