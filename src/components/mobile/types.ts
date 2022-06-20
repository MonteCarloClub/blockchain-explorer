
type PropMap = {
    index: string;
    process?: (arg: string | number) => string | number;
}

export type ListItemMap = {
    title: PropMap;
    subTitle: PropMap;
    desc: PropMap;
    subDesc: PropMap;
}

export type GridItemMap = {
    title: PropMap;
    subTitle: PropMap;
    desc: PropMap;
}