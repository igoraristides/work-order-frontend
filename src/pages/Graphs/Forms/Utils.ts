export const GetFormattedDate = (data: string): Date => {

    const date = data.split("/")

    const newDate = `${date[1]}/${date[0]}/${date[2]}`

    return new Date(newDate)

}