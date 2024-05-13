export const decodeHtmlString = (htmlString: string) => {
  const entityRegex = /&(nbsp|amp|quot|lt|gt|#(\d+));/g;

  const replaceEntity = (match: string, entity: string, decimal: any) => {
    switch (entity) {
      case "nbsp":
        return " ";
      case "amp":
        return "&";
      case "quot":
        return '"';
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "#":
        return String.fromCharCode(decimal);
      default:
        return match;
    }
  };

  const decodedString = htmlString.replace(entityRegex, replaceEntity);

  return decodedString;
};
