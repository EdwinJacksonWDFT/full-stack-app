module.exports = ({
    protocol,
    host,
    username,
    password,
    database,
    options
}) => `
    ${protocol}://${username}:${encodeURIComponent(password)}@${host}/${database}?${options}
`.trim();