type PropMap = {
    index: string;
    process?: (arg: string | number) => string | number;
}

export type htmlLabel = 'h1'|'h2'|'h3'|'h4'|'h5';

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