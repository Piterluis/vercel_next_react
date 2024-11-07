// /pages/api/invoices.js

export default async function handler(req, res) {
    const { query, page } = req.query;
    const currentPage = Number(page) || 1;
  
    // Simulación de datos para las facturas (aquí podrías hacer una consulta a la base de datos)
    const invoices = [
      { id: 1, name: 'Invoice 1', amount: 100, status: 'paid' },
      { id: 2, name: 'Invoice 2', amount: 200, status: 'unpaid' },
      // Más datos de facturas...
    ];
  
    // Filtra los resultados según el `query`, si está presente
    const filteredInvoices = query
      ? invoices.filter((invoice) =>
          invoice.name.toLowerCase().includes(query.toLowerCase())
        )
      : invoices;
  
    // Puedes agregar lógica de paginación aquí si tienes muchos datos
    const pageSize = 10;
    const paginatedInvoices = filteredInvoices.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
  
    res.status(200).json({
      invoices: paginatedInvoices,
      totalPages: Math.ceil(filteredInvoices.length / pageSize),
    });
  }
  