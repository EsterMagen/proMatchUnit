using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DAL;

namespace API_Project.Controllers
{
    public class apartmentsController : ApiController
    {
        private projectDBEntities db = new projectDBEntities();

        // GET: api/apartments
        public IQueryable<apartments> Get()
        {
            return db.apartments;

        }

        // GET: api/apartments/5
        [ResponseType(typeof(apartments))]
        public IHttpActionResult Getapartments(int id)
        {
           
            apartments apartments = db.apartments.Find(id);
            if (apartments == null)
            {
                return NotFound();
            }

            return Ok(apartments);
        }

        // PUT: api/apartments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putapartments(int id, apartments apartments)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != apartments.id)
            {
                return BadRequest();
            }

            db.Entry(apartments).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!apartmentsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/apartments
        [ResponseType(typeof(apartments))]
        public IHttpActionResult Postapartments(apartments apartments)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.apartments.Add(apartments);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = apartments.id }, apartments);
        }

        // DELETE: api/apartments/5
        [ResponseType(typeof(apartments))]
        public IHttpActionResult Deleteapartments(int id)
        {
            apartments apartments = db.apartments.Find(id);
            if (apartments == null)
            {
                return NotFound();
            }

            db.apartments.Remove(apartments);
            db.SaveChanges();

            return Ok(apartments);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool apartmentsExists(int id)
        {
            return db.apartments.Count(e => e.id == id) > 0;
        }
    }
}