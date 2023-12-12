export const DropDown = ({ menu, link = "content" }) => {
    const  src = "/"+link+"/"
    return (
        <>
            <ul
                class="dropdown-menu bg-black mt-2"
                aria-labelledby="navbarDropdownMenuLink"
            >
                {menu.map((dataOne, idx) => {
                    return (
                        <li key={idx}>
                            <a
                                class="dropdown-item text-white"
                                href={src + dataOne.slug}
                            >
                                {dataOne.label}
                            </a>

                            {dataOne.children.length !== 0 && (
                                <>
                                    <ul class="dropdown-menu dropdown-submenu bg-black">
                                        {dataOne.children.map((dataTwo, idx) => {
                                            return (
                                                <li>
                                                    <a
                                                        class="dropdown-item text-white"
                                                        href={src + dataOne.slug+"/"+dataTwo.slug}
                                                    >
                                                        {dataTwo.label}
                                                    </a>
                                                    {dataTwo.children.length !==
                                                        0 && (
                                                        <>
                                                            <ul class="dropdown-menu dropdown-submenu bg-black">
                                                                {dataTwo.children.map(
                                                                    (
                                                                        dataThree,
                                                                        idx
                                                                    ) => {
                                                                        return (
                                                                            <li>
                                                                                <a
                                                                                    class="dropdown-item text-white"
                                                                                    href={src + dataOne.slug+"/"+dataTwo.slug+"/"+dataThree.slug}
                                                                                >
                                                                                    {dataThree.label}
                                                                                </a>
                                                                            </li>
                                                                        );
                                                                    }
                                                                )}
                                                            </ul>
                                                        </>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
