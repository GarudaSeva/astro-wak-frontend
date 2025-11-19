import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ALL_SERVICE_TITLES } from "@/config/titles";

interface Booking {
  _id: string;
  name: string;
  email: string;
  amount: number;
  createdAt: string;

  bookingData: {
    title: string;
    allFields: Record<string, any>;
  };

  consultationStatus: "Ready" | "Closed";
}

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const [filters, setFilters] = useState({
    search: "",
    serviceType: "all",
    status: "all",
  });

  const fetchBookings = async () => {
    if (!isAuthenticated) return;

    setLoading(true);

    let query = `?search=${filters.search}&sort=desc`;

    if (filters.status !== "all") query += `&status=${filters.status}`;
    if (filters.serviceType !== "all") query += `&serviceType=${filters.serviceType}`;

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/bookings${query}`);
    const data = await res.json();

    if (data.success) {
      setBookings(data.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) fetchBookings();
  }, [isAuthenticated]);

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (
      username === import.meta.env.VITE_ADMIN_USER &&
      password === import.meta.env.VITE_ADMIN_PASS
    ) {
      setIsAuthenticated(true);
    }
  };

  // HIDE EMPTY FIELDS
  const validFields = (obj: Record<string, any>) =>
    Object.entries(obj).filter(([k, v]) => v !== "" && v !== null && v !== undefined);

  // MARK CLOSED
  const markClosed = async () => {
    if (!selectedBooking) return;

    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/bookings/${selectedBooking._id}/close`, {
      method: "PUT",
    });

    setPopupOpen(false);
    fetchBookings();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Card className="p-8 max-w-sm">
          <h2 className="text-xl mb-4 font-bold">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <Button className="w-full">Login</Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen container mx-auto py-10">
      <h1 className="text-3xl text-center font-bold mb-6">Admin Dashboard</h1>

      {/* FILTERS */}
      <Card className="p-4 mb-6 flex flex-wrap gap-4">

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-500 h-4 w-4" />
          <Input
            className="pl-10"
            placeholder="Search by name, email, order..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>

        {/* TITLE FILTER */}
<Select
  value={filters.serviceType}
  onValueChange={(v) => setFilters({ ...filters, serviceType: v })}
>
  <SelectTrigger className="w-[260px]">
    <SelectValue placeholder="Select Service" />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value="all">All Services</SelectItem>

    {ALL_SERVICE_TITLES.map((title) => (
      <SelectItem key={title} value={title}>
        {title}
      </SelectItem>
    ))}
  </SelectContent>
</Select>


        {/* Status */}
        <Select
          value={filters.status}
          onValueChange={(v) => setFilters({ ...filters, status: v })}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Ready">Ready</SelectItem>
            <SelectItem value="Closed">Closed</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={fetchBookings}>Apply</Button>
      </Card>

      {/* TABLE */}
      <Card className="p-6">
        {loading ? (
          <div className="flex justify-center"><Loader2 className="animate-spin" /></div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {bookings.map((b) => (
                <TableRow key={b._id}>
                  <TableCell>{b.name}</TableCell>
                  <TableCell>{b.email}</TableCell>
                  <TableCell>₹{b.amount}</TableCell>
                  <TableCell>{b.bookingData.title}</TableCell>

                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        b.consultationStatus === "Closed"
                          ? "bg-red-200 text-red-700"
                          : "bg-green-200 text-green-700"
                      }`}
                    >
                      {b.consultationStatus}
                    </span>
                  </TableCell>

                  <TableCell>{new Date(b.createdAt).toLocaleString("en-IN")}</TableCell>

                  <TableCell>
                    <Button size="sm" onClick={() => { setSelectedBooking(b); setPopupOpen(true); }}>
                      View
                    </Button>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>

      {/* POPUP */}
      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader><DialogTitle>Booking Details</DialogTitle></DialogHeader>

          {selectedBooking && (
            <div className="space-y-2">
              <p><strong>Name:</strong> {selectedBooking.name}</p>
              <p><strong>Email:</strong> {selectedBooking.email}</p>
              <p><strong>Amount:</strong> ₹{selectedBooking.amount}</p>
              <p><strong>Service:</strong> {selectedBooking.bookingData.title}</p>

              <h3 className="font-semibold mt-4">Details</h3>
              <div className="bg-gray-100 p-3 rounded">
                {validFields(selectedBooking.bookingData.allFields).map(([k, v]) => (
                  <p key={k}><strong>{k}:</strong> {String(v)}</p>
                ))}
              </div>
            </div>
          )}

          <DialogFooter>
            {selectedBooking?.consultationStatus === "Closed" ? (
              <Button disabled className="bg-gray-400">Already Closed</Button>
            ) : (
              <Button className="bg-red-600 text-white" onClick={markClosed}>
                Mark as Closed
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
