export const DropDown = ({ menu, link="content"}) => {
    return (
        <>
            <ul
                class="dropdown-menu bg-black mt-2"
                aria-labelledby="navbarDropdownMenuLink"
            >
                {menu.map((data, idx) => {
                    return (
                        <li key={idx}>
                            <a class="dropdown-item text-white" href={"/"+link}>
                                {data}
                            </a>
                            <ul class="dropdown-menu dropdown-submenu bg-black">
                                <li>
                                    <a class="dropdown-item text-white" href="#">
                                        Submenu item 1
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item text-white" href="#">
                                        Submenu item 2
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item text-white" href="#">
                                        Submenu item 3 &raquo;{" "}
                                    </a>
                                    <ul class="dropdown-menu dropdown-submenu bg-black">
                                        <li>
                                            <a class="dropdown-item text-white" href="#">
                                                Multi level 1
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item text-white" href="#">
                                                Multi level 2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
