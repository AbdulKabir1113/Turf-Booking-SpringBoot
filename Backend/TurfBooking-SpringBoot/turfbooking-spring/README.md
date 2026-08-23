# TurfBooking - Spring Boot + Hibernate (JPA) Backend

This replaces the old **Servlet + JDBC** backend with **Spring Boot 3 + Spring Data JPA (Hibernate)**,
while keeping every REST endpoint URL **identical** to the old servlets. That means your existing
React frontend (services/*.js) works **without any changes** - it's already pointed at
`http://localhost:8080/TurfBooking`, and `server.servlet.context-path=/TurfBooking` in
`application.properties` reproduces that exact base path.

## What changed vs the old project

| Old (Servlet + JDBC)          | New (Spring Boot + Hibernate)                     |
|--------------------------------|----------------------------------------------------|
| `dto/*.java` (POJOs)            | `entity/*.java` (JPA `@Entity`) + `dto/*.java` (response shapes) |
| `dao/*.java` (raw SQL, PreparedStatement) | `repository/*.java` (Spring Data JPA) + `service/*.java` (business logic) |
| `controller/*Servlet.java` (`@WebServlet`, manual CORS headers, Gson) | `controller/*Controller.java` (`@RestController`, Jackson JSON auto-handled) |
| `util/DBConnection.java`        | `application.properties` datasource config (Spring manages the connection pool) |
| Manual `response.setHeader("Access-Control-Allow-Origin", ...)` in every servlet | One global `CorsConfig.java` |
| `web.xml`                        | Not needed - Spring Boot has an embedded Tomcat, auto-configured |

`UpdateTurfServlet` and `DeleteTurfServlet` were empty stubs in the old project (the frontend already
called `/updateTurf` PUT and `/deleteTurf` DELETE) - these are now fully implemented in
`TurfController` + `TurfService`.

## Prerequisites

- Java 17+
- Maven 3.8+
- The same MySQL database (`turf_booking_db`) the old backend used - no schema changes needed.
  `spring.jpa.hibernate.ddl-auto=update` will not touch your existing data.

## Configure

Edit `src/main/resources/application.properties` if your DB credentials or upload folder differ:

```properties
spring.datasource.username=root
spring.datasource.password=root
app.upload.dir=C:/TurfUploads
```

## Run

```bash
mvn spring-boot:run
```

or build a jar and run it:

```bash
mvn clean package
java -jar target/TurfBooking.jar
```

The API will be available at `http://localhost:8080/TurfBooking` - same as before.

## Endpoint map (unchanged)

| Method | Path              | Old Servlet              | New Controller       |
|--------|-------------------|---------------------------|-----------------------|
| POST   | /signup            | SignupServlet              | AuthController        |
| POST   | /login             | LoginServlet                | AuthController        |
| GET    | /getAllTurfs       | GetAllTurfsServlet          | TurfController         |
| POST   | /addTurf           | AddTurfServlet               | TurfController         |
| PUT    | /updateTurf        | (empty stub)                 | TurfController (new)   |
| DELETE | /deleteTurf        | (empty stub)                 | TurfController (new)   |
| POST   | /bookSlot          | BookSlotServlet               | BookingController      |
| GET    | /getBookedSlots    | GetBookedSlotsServlet          | BookingController      |
| GET    | /getMyBookings     | GetMyBookingsServlet            | BookingController      |
| POST   | /cancelBooking     | CancelBookingServlet             | BookingController      |
| GET    | /ownerDashboard    | OwnerDashboardServlet              | OwnerController        |
| GET    | /getOwnerTurfs     | GetOwnerTurfsServlet                 | OwnerController        |
| GET    | /getOwnerBookings  | GetOwnerBookingsServlet                | OwnerController        |
| GET    | /getOwnerProfile   | GetOwnerProfileServlet                   | OwnerController        |
| GET    | /images/{file}     | ImageServlet                               | ImageController        |
| GET    | /test              | TestServlet                                  | TestController          |

## Frontend

No changes needed. Your existing `Frontend/` folder (React + Vite) talks to this backend exactly as
it talked to the old one.
