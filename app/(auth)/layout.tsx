const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
            {children}
        </div>
     );
}
 
export default AuthLayout;