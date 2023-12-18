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
                                {dataOne.titre}
                            </a>
                            {dataOne.toutes_sous_categories.length !== 0 && (
                                <>
                                    <ul class="dropdown-menu dropdown-submenu bg-black">
                                        {dataOne.toutes_sous_categories.map((dataTwo, idx) => {
                                            return (
                                                <li>
                                                    <a
                                                        class="dropdown-item text-white"
                                                        href={src + dataOne.slug+"/"+dataTwo.slug}
                                                    >
                                                        {dataTwo.titre}
                                                    </a>
                                                    {dataTwo.toutes_sous_categories.length !==
                                                        0 && (
                                                        <>
                                                            <ul class="dropdown-menu dropdown-submenu bg-black">
                                                                {dataTwo.toutes_sous_categories.map(
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
                                                                                    {dataThree.titre}
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
