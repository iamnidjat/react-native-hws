import { useState } from "react";

export default function useForceUpdate(): [() => void, number] {
    const [value, setValue] = useState<number>(0);
    return [() => setValue(value + 1), value];
};


