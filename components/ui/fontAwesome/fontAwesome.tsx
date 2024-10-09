"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeProps } from "./fontAwsome.type";

export default function FontAwesome({
  icon,
  size = "xs",
  className,
}: FontAwesomeProps) {
  return <FontAwesomeIcon icon={icon} className={className} size={size} />;
}
