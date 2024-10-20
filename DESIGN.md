# Reviva - Booking App

## References

<https://picayune-talon-09f.notion.site/Paul-Take-Home-Technical-Project-123e2d86fc8480f3b73ff4f8d3e23b7a>

## User types

For this MVP, we'll focus on these two types of users:

- Employees
- Customers

As we build this out, we'll need to add the following:

- Admin: can create and grant non-admin permissions
- Super admin: can add any type of user and grant permissions to them

## User Stories

- Employees: see bookings on a given day
- Employees: enter open slots
- Customers: view open slots
- Customers: book a slot

## Entities

- customer: a person who books booking-slots
- booking: maps booking-slot to customer
- booking-slot: room/time/treatment/provider available to book
- room: a location where a booking can take place
  - one room to many bookings
- provider: a organization in which services can be booked
- treatment: the service being provided (let's avoid using the word "service", which has meaning across too many contexts)

## Security Scopes to Roles

- `room:create`: admin and super-admin
- `provider:bookings:list`: admin, super-admin, employee
- `booking-slots:view`: all roles
