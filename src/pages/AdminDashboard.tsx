import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Booking {
  _id: string;
  name: string;
  email: string;
  amount: number;
  amount_paise: number;
  razorpay_order_id: string;
  razorpay_payment_id: string;
  status: string;
  createdAt: string;
}

interface Consultation {
  _id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  consultationType: string;
  otherName?: string;
  otherGender?: string;
  purpose?: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  additionalInfo?: string;
  createdAt: string;
}

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Active Tab
  const [activeTab, setActiveTab] = useState<"bookings" | "consultations">("bookings");

  // ✅ Separate filters for each tab
  const [bookingsFilters, setBookingsFilters] = useState({
    search: "",
    from: "",
    to: "",
    sort: "desc",
  });

  const [consultationFilters, setConsultationFilters] = useState({
    search: "",
    from: "",
    to: "",
    sort: "desc",
    serviceType: "all",
  });

  // --- Fetch Data ---
  const fetchData = async (type: "bookings" | "consultations") => {
    if (!isAuthenticated) return;
    setLoading(true);

    try {
      if (type === "bookings") {
        const { search, from, to, sort } = bookingsFilters;
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/bookings?search=${search}&from=${from}&to=${to}&sort=${sort}`
        );
        const data = await res.json();
        if (data.success) setBookings(data.data);
      } else {
        const { search, from, to, sort, serviceType } = consultationFilters;
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/consultations?search=${search}&serviceType=${serviceType}&from=${from}&to=${to}&sort=${sort}`
        );
        const data = await res.json();
        if (data.success) setConsultations(data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchData(activeTab);
  }, [isAuthenticated, activeTab]);

  // --- Handle Login ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminUser = import.meta.env.VITE_ADMIN_USER;
    const adminPass = import.meta.env.VITE_ADMIN_PASS;

    if (username === adminUser && password === adminPass) {
      setIsAuthenticated(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  // --- Clear Filters ---
  const clearFilters = (type: "bookings" | "consultations") => {
    if (type === "bookings") {
      setBookingsFilters({ search: "", from: "", to: "", sort: "desc" });
      fetchData("bookings");
    } else {
      setConsultationFilters({
        search: "",
        from: "",
        to: "",
        sort: "desc",
        serviceType: "all",
      });
      fetchData("consultations");
    }
  };

  // --- Show Login if Not Authenticated ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-background to-muted">
        <Card className="p-8 w-full max-w-sm text-center border-2 border-secondary/30 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-primary placeholder:text-gray-500"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-primary placeholder:text-gray-500"
              required
            />
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  // --- Dashboard ---
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-playfair text-center text-primary mb-10">
          Admin Dashboard
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
            <TabsList className="flex justify-center mb-6 text-yellow-500">
              <TabsTrigger value="bookings">Gem Bookings</TabsTrigger>
              <TabsTrigger value="consultations">Consultations</TabsTrigger>
            </TabsList>

            {/* ---- Gem Bookings Tab ---- */}
            <TabsContent value="bookings">
              <div className="flex flex-wrap gap-3 mb-4 items-center justify-between">
                {/* Search */}
                <div className="relative w-full sm:w-1/3">
                  <Search className="absolute left-3 top-3 text-gray-500 h-4 w-4" />
                  <Input
                    placeholder="Search by name, email, order ID, or payment ID..."
                    value={bookingsFilters.search}
                    onChange={(e) => setBookingsFilters({ ...bookingsFilters, search: e.target.value })}
                    className="pl-9 border-primary text-black placeholder:text-black"
                  />
                </div>

                {/* Date Range */}
                <div className="flex gap-2 items-center">
                  <Input
                    type="date"
                    value={bookingsFilters.from}
                    onChange={(e) => setBookingsFilters({ ...bookingsFilters, from: e.target.value })}
                    className="border-primary"
                  />
                  <span className="text-gray-500">to</span>
                  <Input
                    type="date"
                    value={bookingsFilters.to}
                    onChange={(e) => setBookingsFilters({ ...bookingsFilters, to: e.target.value })}
                    className="border-primary"
                  />
                </div>

                {/* Sort */}
                <Select
                  value={bookingsFilters.sort}
                  onValueChange={(v) => setBookingsFilters({ ...bookingsFilters, sort: v })}
                >
                  <SelectTrigger className="w-[120px] border-primary">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desc">Newest</SelectItem>
                    <SelectItem value="asc">Oldest</SelectItem>
                  </SelectContent>
                </Select>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button onClick={() => fetchData("bookings")} className="bg-primary text-white hover:bg-primary/90">
                    Apply
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => clearFilters("bookings")}
                    className="border-yellow-600 text-secondary hover:bg-yellow-100"
                  >
                    Clear
                  </Button>
                </div>
              </div>

              {/* Table */}
              {bookings.length === 0 ? (
                <p className="text-center text-secondary">No bookings found.</p>
              ) : (
                <Card className="p-6 overflow-x-auto border-2 border-secondary/30 shadow-md">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary/10">
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Payment ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookings.map((b) => (
                        <TableRow key={b._id}>
                          <TableCell>{b.name}</TableCell>
                          <TableCell>{b.email}</TableCell>
                          <TableCell>₹{b.amount}</TableCell>
                          <TableCell className="text-xs">{b.razorpay_order_id}</TableCell>
                          <TableCell className="text-xs">{b.razorpay_payment_id}</TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                b.status === "PAID"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {b.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            {new Date(b.createdAt).toLocaleString("en-IN", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              )}
            </TabsContent>

            {/* ---- Consultations Tab ---- */}
            <TabsContent value="consultations">
              <div className="flex flex-wrap gap-3 mb-4 items-center justify-between">
                {/* Search */}
                <div className="relative w-full sm:w-1/3">
                  <Search className="absolute left-3 top-3 text-gray-500 h-4 w-4" />
                  <Input
                    placeholder="Search by name, email or phone..."
                    value={consultationFilters.search}
                    onChange={(e) =>
                      setConsultationFilters({ ...consultationFilters, search: e.target.value })
                    }
                    className="pl-9 border-primary placeholder:text-black"
                  />
                </div>

                {/* Service Type */}
                <Select
                  value={consultationFilters.serviceType}
                  onValueChange={(v) => setConsultationFilters({ ...consultationFilters, serviceType: v })}
                >
                  <SelectTrigger className="w-[160px] border-primary">
                    <SelectValue placeholder="Service Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="horoscope">Horoscope</SelectItem>
                    <SelectItem value="numerology">Numerology</SelectItem>
                    <SelectItem value="gems">Gems</SelectItem>
                    <SelectItem value="muhurt">Muhurt</SelectItem>
                    <SelectItem value="pooja">Pooja</SelectItem>
                  </SelectContent>
                </Select>

                {/* Date Range */}
                <div className="flex gap-2 items-center">
                  <Input
                    type="date"
                    value={consultationFilters.from}
                    onChange={(e) => setConsultationFilters({ ...consultationFilters, from: e.target.value })}
                    className="border-primary"
                  />
                  <span className="text-gray-500">to</span>
                  <Input
                    type="date"
                    value={consultationFilters.to}
                    onChange={(e) => setConsultationFilters({ ...consultationFilters, to: e.target.value })}
                    className="border-primary"
                  />
                </div>

                {/* Sort */}
                <Select
                  value={consultationFilters.sort}
                  onValueChange={(v) => setConsultationFilters({ ...consultationFilters, sort: v })}
                >
                  <SelectTrigger className="w-[120px] border-primary">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desc">Newest</SelectItem>
                    <SelectItem value="asc">Oldest</SelectItem>
                  </SelectContent>
                </Select>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button onClick={() => fetchData("consultations")} className="bg-primary text-white hover:bg-primary/90">
                    Apply
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => clearFilters("consultations")}
                    className="border-yellow-600 text-secondary hover:bg-yellow-100"
                  >
                    Clear
                  </Button>
                </div>
              </div>

              {/* Table */}
              {consultations.length === 0 ? (
                <p className="text-center text-secondary">No consultations found.</p>
              ) : (
                <Card className="p-6 overflow-x-auto border-2 border-secondary/30 shadow-md">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary/10">
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Service Type</TableHead>
                        <TableHead>Birth Details</TableHead>
                        <TableHead>Created At</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {consultations.map((c) => (
                        <TableRow key={c._id}>
                          <TableCell>{c.name}</TableCell>
                          <TableCell>{c.email}</TableCell>
                          <TableCell>{c.phone}</TableCell>
                          <TableCell className="capitalize">{c.serviceType}</TableCell>
                          <TableCell>
                            {c.birthDate} at {c.birthTime}, {c.birthPlace}
                          </TableCell>
                          <TableCell>
                            {new Date(c.createdAt).toLocaleString("en-IN", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
