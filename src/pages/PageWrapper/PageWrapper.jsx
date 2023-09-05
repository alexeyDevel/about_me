import { useState, useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"
import '../style.scss'
import { Container } from "@chakra-ui/react"

export default function PageWrapper() {

    return <div>
        <header className="header">
            <Container maxW="container.xl">
                <menu className="navigate" type="toolbar">
                    <NavLink
                        to="/about_me"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                        {`*{Мой путь к работе мечты}`}
                    </NavLink>
                    <p>
                        {`<!Alexey Matiushkin>`}
                    </p>
                    <NavLink
                        to="/task"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                        {`*{Задание со звездочкой}`}
                    </NavLink>
                </menu>
            </Container>
        </header>
        <Outlet />
    </div>
}