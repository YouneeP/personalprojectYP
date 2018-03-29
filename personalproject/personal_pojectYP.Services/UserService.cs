using personal_projectYP.Models.Domain;
using personal_projectYP.Models.Request;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;

namespace personal_pojectYP.Services
{
    public class UserService
    {      
        private string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public int Registration(UserAddRequest model)
        {
            //password encryption should be added.
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Accounts_Insert";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter parm = new SqlParameter();
                    parm.ParameterName = "@Id";
                    parm.SqlDbType = System.Data.SqlDbType.Int;
                    parm.Direction = System.Data.ParameterDirection.Output;

                    cmd.Parameters.Add(parm);
                    cmd.Parameters.AddWithValue("@FirstName", model.FirstName);
                    cmd.Parameters.AddWithValue("@LastName", model.LastName);
                    cmd.Parameters.AddWithValue("@Age", model.Age);
                    cmd.Parameters.AddWithValue("@Email", model.Email);
                    cmd.Parameters.AddWithValue("@Password", model.Password);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    result = (int)cmd.Parameters["@Id"].Value;
                    conn.Close();
                }
            }
            return result;
        }

        public User Login(UserLogin loginInfo)
        {
            User result = new User();
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Accounts_SelectByEmailAndPassword";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Email", loginInfo.Email);
                    cmd.Parameters.AddWithValue("@Password", loginInfo.Password);
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    if (reader.Read())
                    {
                        int index = 0;
                        result.Id = reader.GetInt32(index++);
                        result.FirstName = reader.GetString(index++);
                        result.LastName = reader.GetString(index++);
                        result.Age = reader.GetInt32(index++);
                        result.CreatedDate = reader.GetDateTime(index++);
                        result.ModifiedDate = reader.GetDateTime(index++);
                        result.Email = reader.GetString(index++);
                        result.Password = reader.GetString(index++);
                    }
                    conn.Close();
                }
            }
            return result;
        }

        public User GetById(int id)
        {
            User result = new User();
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Accounts_SelectByAccountId";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@id", id);
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    if (reader.Read())
                    {
                        int index = 0;
                        result.Id = reader.GetInt32(index++);
                        result.FirstName = reader.GetString(index++);
                        result.LastName = reader.GetString(index++);
                        result.Age = reader.GetInt32(index++);
                        result.CreatedDate = reader.GetDateTime(index++);
                        result.ModifiedDate = reader.GetDateTime(index++);
                        result.Email = reader.GetString(index++);
                        result.Password = reader.GetString(index++);
                    }
                    conn.Close();
                }
            }
            return result;
        }

        public int PostMeal(UserMealAddRequest model)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Meal_Insert";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter parm = new SqlParameter();
                    parm.ParameterName = "@Id";
                    parm.SqlDbType = System.Data.SqlDbType.Int;
                    parm.Direction = System.Data.ParameterDirection.Output;

                    cmd.Parameters.Add(parm);
                    cmd.Parameters.AddWithValue("@AccountId", model.AccountId);
                    cmd.Parameters.AddWithValue("@Meal", model.Meal);
                    cmd.Parameters.AddWithValue("@Quantity", model.Quantity);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    result = (int)cmd.Parameters["@Id"].Value;
                    conn.Close();
                }
            }
            return result;
        }

        public List<UserMeal> SelectByAccountId(int AccountId)
        {
            List<UserMeal> result = new List<UserMeal>();
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Meal_SelectAllByAccountId";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@AccountId", AccountId);
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        UserMeal model = new UserMeal();
                        int index = 0;
                        model.Id = reader.GetInt32(index++);
                        model.AccountId = reader.GetInt32(index++);
                        model.Meal = reader.GetString(index++);
                        model.Quantity = reader.GetInt32(index++);
                        model.CreatedDate = reader.GetDateTime(index++);
                        model.ModifiedDate = reader.GetDateTime(index++);
                        result.Add(model);
                    }
                    conn.Close();
                }
            }
            return result;
        }

        public List<UserMeal> SelectByDate(int AccountId)
        {
            List<UserMeal> result = new List<UserMeal>();
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Meal_SelectAllByDate";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@AccountId", AccountId);
                    cmd.Parameters.AddWithValue("@Today", 0);
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        UserMeal model = new UserMeal();
                        int index = 0;
                        model.Id = reader.GetInt32(index++);
                        model.AccountId = reader.GetInt32(index++);
                        model.Meal = reader.GetString(index++);
                        model.Quantity = reader.GetInt32(index++);
                        model.CreatedDate = reader.GetDateTime(index++);
                        model.ModifiedDate = reader.GetDateTime(index++);
                        result.Add(model);
                    }
                    conn.Close();
                }
                return result;
            }
        }

        public UserMeal SelectById(int Id)
        {
            UserMeal result = new UserMeal();
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Meal_SelectById";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", Id);
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    if (reader.Read())
                    {
                        int index = 0;
                        result.Id = reader.GetInt32(index++);
                        result.AccountId = reader.GetInt32(index++);
                        result.Meal = reader.GetString(index++);
                        result.Quantity = reader.GetInt32(index++);                  
                        result.CreatedDate = reader.GetDateTime(index++);
                        result.ModifiedDate = reader.GetDateTime(index++);
                    }
                    conn.Close();
                }
            }
            return result;
        }

        public void Delete(int Id)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Meal_Delete";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", Id);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
            }
        }

        public void Update(UserMealUpdateRequest model)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Meal_Update";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", model.Id);
                    cmd.Parameters.AddWithValue("@AccountId", model.AccountId);
                    cmd.Parameters.AddWithValue("@Meal", model.Meal);
                    cmd.Parameters.AddWithValue("@Quantity", model.Quantity);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
            }
        }
    }
}
