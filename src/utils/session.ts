
export const getUserSession = async (request: Request) => {
    return sessionStorage.getSession(request.headers.get("Cookie"));
  };

export const createUserSession = async ({
    request, accessToken, refreshToken, userId
}: {
    request: Request;
    accessToken: string;
    refreshToken: string;
    userId: string;
}) =>{
    const session = await getUserSession(request);
    session.set('accessToken', accessToken);
    session.set('refreshToken', refreshToken);
    session.set('userId', userId);

    return session;
}
